import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SettingsContext = createContext();

export const SettingsProvider = ({
    children
}) => {
    const [account, setAccount] = useState({});

    const navigate = useNavigate();

    const onAccountSettings = async (data) => {
        const result = data;
        
        setAccount(result);

        navigate('/');
    };

    const settingsValues = {
        setAccount,
        onAccountSettings,
        name: account.username,
        description: account.description,
        image: account.imageUrl,
    };

    return (
        <>
            <SettingsContext.Provider value={settingsValues}>
                {children}
            </SettingsContext.Provider>
        </>
    )
};