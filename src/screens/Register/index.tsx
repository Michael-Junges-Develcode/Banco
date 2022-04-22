import React, { useState, useEffect } from 'react'
import { 
    Modal,
    Keyboard,
    Alert 
} from 'react-native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { TouchableWithoutFeedback } from "react-native-gesture-handler"
import { Container, Form, Header, Title, Fields, TransactionsType } from './styles';
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useForm } from 'react-hook-form';
import { useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { AppRoutesParamList } from "../../routes/app.routes";
import { InputForm } from '../../components/Form/InputForm';
import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';


type RegisterNavigationProps = BottomTabNavigationProp<
    AppRoutesParamList,
    "Cadastro"
>;
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

    const user = auth().currentUser;

    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);

    const dataKey = `@kaelbank:transactions_user:${user?.uid}`;

    const navigation = useNavigation<RegisterNavigationProps>();

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    function handleTransactionsTypeSelect(type: "positive" | "negative") {
        setTransactionType(type);
    }

    function handleOpenCategorySelectModal() {
        setCategoryModalOpen(true);
    }

    function handleCloseCategorySelectModal() {
        setCategoryModalOpen(false);
    }

    async function handleRegister(form: Partial<FormData>) {

        if(!transactionType)
            return Alert.alert("Erro", "Selecione o tipo da transação");
        
        if(category.key === "category")
            return Alert.alert("Erro", "Selecione uma categoria");

        Alert.alert("Sucesso", "Transação registrada com sucesso");
    
        const newTransaction = {
            id: String(uuidv4()),
            name: form.name,
            amount: form.amount,
            category: category.key,
            type: transactionType,
            date: new Date()
        }

        try {
            const data = await AsyncStorage.getItem(dataKey);
            const currentData = data ? JSON.parse(data) : [];
            const dataFormatted = [
                newTransaction,
                ...currentData
            ];
            await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));

            reset();
            setTransactionType('');
            setCategory({
                key: "category",
                name: "Categoria"
            });

            navigation.navigate("Home")

        } catch (error) {
            console.log(error);
            Alert.alert("Erro", "Ocorreu um erro ao registrar a transação");
        }
    }

    useEffect(() => {
        async function loadData() {
            await AsyncStorage.getItem(dataKey);
        }

        loadData();
    },[]);

    return (
        <TouchableWithoutFeedback 
            onPress={Keyboard.dismiss}
            style={{ flex: 1 }}
            containerStyle={{ flex: 1 }}            
            >     
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
                                rippleColor = "rgba(18, 164, 84, 0.5)"
                                type="up"
                                title="Income"
                                onPress={() => handleTransactionsTypeSelect("positive")}
                                isActive={transactionType === "positive"}
                            />
                            <TransactionTypeButton
                                rippleColor = "rgba(232, 63, 91, 0.5)"
                                type="down"
                                title="Outcome"
                                onPress={() => handleTransactionsTypeSelect("negative")}
                                isActive={transactionType === "negative"}
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