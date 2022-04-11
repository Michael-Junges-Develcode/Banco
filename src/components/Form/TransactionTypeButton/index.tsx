import React from 'react'
import { View } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { ButtonView, Container, Icon, Title } from './styles'

const icons = {
  up: "arrow-up-circle",
  down: "arrow-down-circle"
}
interface Props extends RectButtonProps {
  title: string;
  type: "up" | "down";
  isActive: boolean;
  onPress: () => void;
}

export function TransactionTypeButton({ onPress, isActive, title, type, ...rest }: Props) {
  return (
    <Container 
      onPress={onPress}
      isActive={isActive}
      type={type}
      {...rest}>  
        <ButtonView accessible accessibilityRole="button">
            <Icon type={type} name={icons[type]} />
            <Title>{title}</Title>
        </ButtonView>
    </Container>
  )
}