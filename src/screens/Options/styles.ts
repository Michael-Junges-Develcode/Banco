import { ScrollView } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Button } from "../../components/Form/Button";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
background-color: ${({ theme }) => theme.colors.primary};
    
width: 100%;
height: ${RFValue(80)}px;

align-items: center;
justify-content: flex-end;
padding-bottom: 15px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
`;

export const View = styled(ScrollView)`
    padding: 24px;
`;

export const OptionsWrapper = styled.View`
    flex: 1;
    width: 100%;
    padding: 24px;
    justify-content: center;
`;


export const BackButton = styled.View`
    justify-content: flex-end;
`;

export const Buttons = styled(Button)`
    margin-bottom: 15px;
    background-color: ${({ theme }) => theme.colors.primary};
`;
