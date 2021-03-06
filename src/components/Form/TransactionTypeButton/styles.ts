import styled, { css } from "styled-components/native";
import IconFeather from "react-native-vector-icons/Feather";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

interface IconProps {
    type: "up" | "down";
}

interface ContainerProps {
    isActive: boolean;
    type: "up" | "down";
}

export const Container = styled(RectButton)<ContainerProps>`
    width: 48%;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border-width: ${({ isActive }) => (isActive ? 0 : 2)}px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.text_light};
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 16px;

    ${({ isActive, type }) => isActive && type === "up" && css`
    background-color: ${({ theme }) => theme.colors.success_light};`};

    ${({ isActive, type }) => isActive && type === "down" && css`
    background-color: ${({ theme }) => theme.colors.attention_light};`};
`;

export const ButtonView = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Icon = styled(IconFeather)<IconProps>`
    font-size: ${RFValue(24)}px;
    margin-right: 12px;

    color: ${({ theme, type }) =>
    type === "up" ? theme.colors.success : theme.colors.attention};
`;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;