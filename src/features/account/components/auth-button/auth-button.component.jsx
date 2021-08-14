import React from 'react';
import {StyledButton} from './auth-button.styles';

const AuthButton = ({title, onPress, icon = "lock-open-outline"}) => {

    return (
        <StyledButton
            icon={icon}
            mode="contained"
            onPress={onPress}
        >
            {title}
        </StyledButton>
    )
}

export default AuthButton;
