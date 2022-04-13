import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import { Button, ImageContainer, Text } from './styles'
import { ImageProps, Image } from 'react-native'

interface Props extends RectButtonProps {
    title: string
    source: ImageProps['source']
}

export function SignInSocialButton({ title, source, ...rest }: Props) {
    return(
        <Button {...rest}>
            <ImageContainer>
                <Image source={source} style={{ width: 50, height: 50, resizeMode: 'contain' }}/>
            </ImageContainer>

        <Text>
            {title}
        </Text>
        </Button>
    )
}