import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Image } from 'react-native'

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    flex: 2.5;
    background-color: ${({ theme }) => theme.colors.primary};
    justify-content: flex-end;
    align-items: center;

`;

export const TitleWrapper = styled.View`
    align-items: center;
    
`;

export const Logo = styled(Image).attrs({
    source: require('../../assets/icons/kaelfinances.png')
})`
    width: ${RFValue(150)};
    height: ${RFValue(80)};
    margin-right: 10px;
    
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(30)}px;
    color: ${({ theme }) => theme.colors.shape};
    text-align: center;
    margin-top: 45px;
`;

export const SignInTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(16)}px;
    text-align: center;
    margin-top: 80px;
    margin-bottom: 67px;
`;

export const Footer = styled.View`
    background-color: ${({ theme }) => theme.colors.secondary};
    flex: 1;
`;

export const FooterWrapper = styled.View`
    margin-top: ${RFPercentage(-4)}px;
    padding: 0 32px;
    justify-content: space-between;
`;