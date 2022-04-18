import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Button = styled(RectButton)`
    height: ${RFValue(56)}px; 
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 10px;
    flex-direction: row;
    margin-bottom: 16px;
    align-items: center;
`;

export const ImageContainer = styled.View`
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: ${RFValue(16)}px;
    border-color: ${({ theme }) => theme.colors.background};
    border-right-width: 1px;
`;

export const Text = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    flex: 1;
    text-align: center;
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: ${RFValue(14)}px;
`;

