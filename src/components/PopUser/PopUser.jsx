import React, { useState, useEffect } from "react";

const UserProfile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsModalOpen(!isModalOpen);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                isModalOpen &&
                !e.target.closest(".pop-user-set") &&
                !e.target.closest(".header__user")
            ) {
                setIsModalOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isModalOpen]);

    return (
        <div className="header__user _hover02" onClick={toggleModal}>
            <p>Ivan Ivanov</p>
            {isModalOpen && (
                <div className="pop-user-set" id="user-set-target">
                    <p className="pop-user-set__name">Ivan Ivanov</p>
                    <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                    <div className="pop-user-set__theme">
                        <p>Темная тема</p>
                        <input type="checkbox" className="checkbox" name="checkbox" />
                    </div>
                    <button type="button" className="_hover03">Выйти</button>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
