import React, { useState } from 'react'
import { 
    Modal,
    TouchableWithoutFeedback, 
    Keyboard,
    Alert 
} from 'react-native';
import { Container, Form, Header, Title, Fields, TransactionsType } from './styles';
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { InputForm } from '../../components/Form/InputForm';
import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';

interface FormData {
    name: string;
    amount: string;
}

const schema = Yup.object().shape({
    name: Yup
        .string().required("O nome é obrigatório"),
    amount: Yup
        .number().typeError("Informe um valor numérico")
        .positive("Informe um valor positivo")
        .required("O valor é obrigatório")
});

export function Register() {

    const [category, setCategory] = useState({
        key: "category",
        name: "Categoria"
    });

    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    function handleTransactionsTypeSelect(type: "up" | "down") {
        setTransactionType(type);
    }

    function handleOpenCategorySelectModal() {
        setCategoryModalOpen(true);
    }

    function handleCloseCategorySelectModal() {
        setCategoryModalOpen(false);
    }

    function handleRegister(form: Partial<FormData>) {

        if(!transactionType)
            return Alert.alert("Erro", "Selecione o tipo da transação");
        
        if(category.key === "category")
            return Alert.alert("Erro", "Selecione uma categoria");

        if(!form.name)
            return Alert.alert("Erro", "Informe o nome da transação");

        if(!form.amount)
            return Alert.alert("Erro", "Informe o valor da transação");

        Alert.alert("Sucesso", "Transação registrada com sucesso");
    
        const data = {
            name: form.name,
            amount: form.amount,
            category: category.key,
            transactionType
        }
        console.log(data);
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Header>
                    <Title>Cadastro</Title>
                </Header>

                <Form>
                    <Fields>
                        <InputForm
                            name="name"
                            control={control}
                            placeholder="Nome"
                            autoCapitalize="sentences"
                            autoCorrect={false}
                            error={errors.name && errors.name.message}
                        />
                        <InputForm
                            name="amount"
                            control={control}
                            placeholder="Preço"
                            keyboardType="numeric"
                            error={errors.amount && errors.amount.message}
                        />

                        <TransactionsType>
                            <TransactionTypeButton
                                type="up"
                                title="Income"
                                onPress={() => handleTransactionsTypeSelect("up")}
                                isActive={transactionType === "up"}
                            />
                            <TransactionTypeButton
                                type="down"
                                title="Outcome"
                                onPress={() => handleTransactionsTypeSelect("down")}
                                isActive={transactionType === "down"}
                            />
                        </TransactionsType>

                        <CategorySelectButton
                            title={category.name}
                            onPress={handleOpenCategorySelectModal}
                        />
                    </Fields>


                    <Button
                        title="Enviar"
                        onPress={handleSubmit(handleRegister)}
                    />
                </Form>

                <Modal visible={categoryModalOpen}>
                    <CategorySelect
                        category={category}
                        setCategory={setCategory}
                        closeCategorySelect={handleCloseCategorySelectModal}
                    />
                </Modal>
            </Container>
        </TouchableWithoutFeedback>
    );
}