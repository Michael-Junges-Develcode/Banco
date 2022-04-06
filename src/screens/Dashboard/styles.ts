import styled from "styled-components/native"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import IconFeather from 'react-native-vector-icons/Feather';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import { DataListProps } from ".";
import { FlatList } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

export const Container = styled.View`
    /* align-items: center; */
    background-color: ${({ theme }) => theme.colors.background};
    height: 100%;
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
`;

export const UserWrapper = styled.View`
    width: 100%;
    padding: 0 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${RFValue(28)}px;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */
`;

export const Photo = styled.Image`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;

    border-radius: 10px;
`;

export const User = styled.View`
    margin-left: 10%;
`;

export const UserGreeting = styled.Text`
    color: ${({ theme }) => theme.colors.shape};

    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.light};
`;

export const UserName = styled.Text`
    color: ${({ theme }) => theme.colors.shape};

    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
`;

export const LogoutButton = styled(BorderlessButton)``;

export const Icon = styled(IconFeather)`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${RFValue(24)}px;
`;

export const IconePerfil = styled(IconAwesome)`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${RFValue(35)}px;
    margin-right: 5%;
`;

export const HighlightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingHorizontal: 24 }
})`
    width: 100%;
`;

export const Transactions = styled.View`
    flex: 1%;
    padding: 0 24px;
    
    margin-top: ${RFPercentage(4)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular};

    margin-bottom: 16px;
`;

export const TransactionList = styled(
    FlatList as new () => FlatList<DataListProps>
    ).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {paddingBottom: 20} 
})``;
