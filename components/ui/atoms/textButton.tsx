import { Modal, Pressable, StyleSheet, Text } from "react-native"

function TextButton({ text }: { text: string }) {
    return (
        <>
            <Pressable >
                <Text style={styles.contentText}>
                    {text}
                </Text>
            </Pressable>

        </>
    )
}

const styles = StyleSheet.create({

    contentText: {
        color: '#666',
        marginBottom: 8,
    },
})

export default TextButton