import React from 'react'
import { Input } from '../Input';
import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form'

export interface Props extends TextInputProps {
    control: Control;
    name: string;
}

export function InputCreateAccount({
    control,
    name,
    ...rest
}: Props) {

    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value }}) => (
                
                        <Input
                            onChangeText={onChange}
                            value={value}
                            {...rest}
                        />
                    
                )}/>
        </>
    )
}