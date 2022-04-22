import styled from "styled-components/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Button } from "../../components/Form/Button";

export const Container = styled.View`
    justify-content: space-evenly;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 24px;
    padding-bottom: ${RFPercentage(10)}px;
`;

export const Title = styled.Text`
    justify-content: center;
    align-items: center;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: ${RFValue(32)}px;
    padding-top: ${RFPercentage(5)}px;
`;

export const Form = styled.View`
    width: 100%;  
    padding-top: ${RFPercentage(5)}px;
`;

export const TextInput = styled.TextInput`
    background-color: ${({ theme }) => theme.colors.shape};
    color: ${({ theme }) => theme.colors.text_dark};

    width: 100%;
    padding: 16px 18px;
    border-radius: 15px;
    margin-bottom: 20px;

    font-family: ${({ theme }) => theme.fonts.light};
    font-size: ${RFValue(14)}px;

`;

export const Button2 = styled(Button)`
    margin-bottom: 20px;
`;