import { Pressable, StyleSheet, Text } from "react-native"

function TextButton({ text }: { text: string }) {
    return (
        <>

            <Text style={styles.contentText}>
                {text}
            </Text>

        </>
    )
}

const styles = StyleSheet.create({

    contentText: {
        color: '#666',
        marginBottom: 8,
        padding: 6,
        backgroundColor: '#dad8d4',
    },
})

export default TextButton