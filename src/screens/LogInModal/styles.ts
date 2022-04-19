import styled from "styled-components/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Button } from "../../components/Form/Button";

export const GestureHandlerView = styled(GestureHandlerRootView)`
    flex: 1;
`;

export const Container = styled.View`
    justify-content: space-evenly;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};
    flex: 1;
    padding: 0 42px;
`;

export const Title = styled.Text`
    justify-content: center;
    align-items: center;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(32)}px;
    
`;

export const Form = styled.View`
    margin-top: ${RFPercentage(-10)}px;
    width: 100%;
    justify-content: center;
    align-items: center;
    
`;

export const TextInput = styled.TextInput`
    background-color: ${({ theme }) => theme.colors.shape};
    color: ${({ theme }) => theme.colors.text_dark};

    width: 100%;
    padding: 16px 18px;
    border-radius: 8px;
    margin-bottom: 16px;

    font-family: ${({ theme }) => theme.fonts.light};
    font-size: ${RFValue(14)}px;

`;

export const Button2 = styled(Button)`
    margin-bottom: 16px;
`;