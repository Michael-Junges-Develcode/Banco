import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import IconFeather from 'react-native-vector-icons/Feather';

export const Button = styled(RectButton).attrs({
    rippleColor: 'rgba(103, 52, 255, 0.8)'
})`
    width: ${RFValue(56)}px; 
    height: ${RFValue(56)}px; 
    background-color: ${({ theme }) => theme.colors.primary};
    justify-content: center;
    align-items: center;
    border-radius: 50px;
`;

export const Icon = styled(IconFeather)`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${RFValue(24)}px;
`;



