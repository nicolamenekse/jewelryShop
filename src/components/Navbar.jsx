import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectFilteredUsers } from "../redux/selectors";
import css from "./Navbar.module.css";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const users = useSelector(selectFilteredUsers);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setShowResults(query.length > 0);
  };

  const handleUserClick = (userId) => {
    setSearchQuery("");
    setShowResults(false);
    navigate(`/user/${userId}`);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.interests.some(interest => 
      interest.toLowerCase().includes(searchQuery.toLowerCase())
    )
  ).slice(0, 5);

  return (
    <div className={css.navbarContainer}>
      <nav className={css.nav}>
        <div className={css.logo}>
          <Link to="/">FriendFinder</Link>
        </div>

        <div className={css.searchContainer}>
          <input
            type="text"
            placeholder="İsim, ilgi alanı veya bio ara..."
            value={searchQuery}
            onChange={handleSearch}
            className={css.searchInput}
          />
          {showResults && (
            <div className={css.searchResults}>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <div
                    key={user.id}
                    className={css.searchResultItem}
                    onClick={() => handleUserClick(user.id)}
                  >
                    <img
                      src={user.image}
                      alt={user.name}
                      className={css.searchResultImage}
                    />
                    <div className={css.searchResultInfo}>
                      <h4>{user.name}</h4>
                      <p>{user.age} yaşında</p>
                      <div className={css.searchResultInterests}>
                        {user.interests.slice(0, 2).map((interest, index) => (
                          <span key={index} className={css.interestTag}>
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className={css.noResults}>Kullanıcı bulunamadı</div>
              )}
            </div>
          )}
        </div>

        <ul className={css.list}>
          <li>
            <Link to="/">Ana Sayfa</Link>
          </li>
          <li>
            <Link to="/users">Tüm Kullanıcılar</Link>
          </li>
          <li>
            <Link to="/male">Erkek Arkadaşlar</Link>
          </li>
          <li>
            <Link to="/female">Kadın Arkadaşlar</Link>
          </li>
          <li>
            <Link to="/about">Hakkımızda</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
