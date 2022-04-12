import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { BorderlessButton } from "react-native-gesture-handler";
import Feather from "react-native-vector-icons/Feather";

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

export const Content = styled.ScrollView`

`;

export const ChartContainer = styled.View`
    width: 100%;
    align-items: center;
`;

export const MonthSelect = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
    padding: 0 15px;
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 10px;
`;

export const MonthSelectButton = styled(BorderlessButton)`
   
`;

export const MonthSelectIcon = styled(Feather)`
    font-size: ${RFValue(24)}px;
`;

export const Month = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(20)}px;
    margin-top: 5px;
`;

