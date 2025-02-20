
import CardComp from "@/components/ui/organism/card";
import useJokeCategories from "@/hooks/useJokes";
import { Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";

function HomeScreen() {
    const { categories, loading, error, refreshCategories } = useJokeCategories();

    return (
        <>
            <SafeAreaView>
                <Text >Joke App</Text>
                <ScrollView>
                    {
                        categories?.categories.map((word, index) => (
                            <CardComp key={index} number={index} categories={word} />
                        ))
                    }
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listContainer: {
        padding: 16,
    },
    categoryItem: {
        backgroundColor: '#fff',
        padding: 16,
        marginBottom: 8,
        borderRadius: 8,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    categoryText: {
        fontSize: 16,
        fontWeight: '500',
    },
    errorText: {
        color: 'red',
        marginBottom: 16,
        textAlign: 'center',
    },
    retryButton: {
        backgroundColor: '#007AFF',
        padding: 12,
        borderRadius: 8,
    },
    retryText: {
        color: '#fff',
        fontSize: 16,
    },
});


export default HomeScreen