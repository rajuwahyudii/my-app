
import CardComp from "@/components/ui/organism/card";
import useJokeCategories from "@/hooks/useJokes";
import { useState } from "react";
import { Text, StyleSheet, SafeAreaView, ScrollView, View, Modal, Button } from "react-native";

function HomeScreen() {
    const { categories, loading, error, refreshCategories } = useJokeCategories();
    const [text, setText] = useState('');
    const [visible, setVisible] = useState(false);
    const showModal = (a: string) => {
        if (visible) {
            setVisible(false)
            return
        }

        setText(a)
        setVisible(true)

    }
    if (loading) {
        <Text>Loading...</Text>
    }

    if (error) {
        <Text>Error</Text>
    }

    return (
        <>
            <SafeAreaView>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={visible}
                    onRequestClose={() => {
                        setVisible(!visible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text >{text}</Text>
                            <Button title="Ok" onPress={() => showModal('')} />
                        </View>
                    </View>
                </Modal>
                <Text style={styles.title}>Joke App</Text>
                <ScrollView>
                    {
                        categories?.categories.map((word, index) => (
                            <CardComp showModal={showModal} key={index} number={index} categories={word} />
                        ))
                    }
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        paddingVertical: 8,
        paddingHorizontal: 4,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
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