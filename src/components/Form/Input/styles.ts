import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
    background-color: ${({ theme }) => theme.colors.shape};
    color: ${({ theme }) => theme.colors.text_dark};

    width: 100%;
    padding: 16px 18px;
    border-radius: 8px;
    margin-bottom: 16px;

    font-family: ${({ theme }) => theme.fonts.light};
    font-size: ${RFValue(14)}px;
`;