import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import IconFeather from "react-native-vector-icons/Feather";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(RectButton)`
    background-color: ${({ theme }) => theme.colors.shape}; 
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    padding: 18px 16px;
`;

export const Category = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;  
`; 

export const Icon = styled(IconFeather)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.text};
`;