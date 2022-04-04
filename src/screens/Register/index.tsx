import React, { useState } from 'react'
import { Modal } from 'react-native';
import { Container, Form, Header, Title, Fields, TransactionsType } from './styles';
import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';

export function Register() {

    const [category, setCategory] = useState({
        key: "category",
        name: "Categoria"
    });
    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);

    function handleTransactionsTypeSelect(type: "up" | "down") {
        setTransactionType(type);
    }

    function handleOpenCategorySelectModal() {
        setCategoryModalOpen(true);
    }

    function handleCloseCategorySelectModal() {
        setCategoryModalOpen(false);
    }

    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Fields>
                    <Input placeholder="Nome" />
                    <Input placeholder="Preço" />

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
                        title="Categoria"
                        onPress={handleOpenCategorySelectModal} 
                    />
                </Fields>


                <Button title="Enviar" />
            </Form>

            <Modal visible={categoryModalOpen}>
                <CategorySelect
                    category={category}
                    setCategory={setCategory}
                    closeCategorySelect={handleCloseCategorySelectModal}
                />
            </Modal>

        </Container>
    );
}