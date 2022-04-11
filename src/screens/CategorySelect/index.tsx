import React from 'react';
import { FlatList } from 'react-native';
import { categories } from '../../utils/categories';
import { Category, Container, Footer, Header, Icon, Name, Separator, Title } from './styles';
import { Button } from '../../components/Form/Button';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
interface Category {
    key: string;
    name: string;
}
export interface Props {
    category: Category;
    setCategory: (category: Category) => void;
    closeCategorySelect: () => void;
}

export function CategorySelect({ category, setCategory, closeCategorySelect }: Props ) {

    function handleCategorySelect(category: Category) {
        setCategory(category);
    }

    const RootView = gestureHandlerRootHOC(() => (
        <>
            <FlatList
            data={categories}
            style={{ flex: 1, width: "100%"}}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
                <Category
                    onPress={() => handleCategorySelect(item)}
                    isActive={item.key === category.key}
                >
                    <Icon name={item.icon} />
                    <Name>{item.name}</Name>
                </Category>
            )}
            ItemSeparatorComponent={() => <Separator />} 
            />

            <Footer>
                <Button
                    title="Selecionar"
                    onPress={closeCategorySelect} 
                />
            </Footer>
        </>
    ))

    return (
        <Container>
            <Header>
                <Title>Categoria</Title>
            </Header>

            <RootView />
        </Container>
    )
}