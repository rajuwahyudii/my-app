import { useRef, useState } from "react";
import { Animated, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ChevronUp, ChevronDown } from 'lucide-react-native';
import TextButton from "../atoms/textButton";

function CardComp({ number, categories }: { number: number, categories: string }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const animationHeight = useRef(new Animated.Value(0)).current;

    const toggleExpand = () => {
        const finalValue = isExpanded ? 0 : 150;
        setIsExpanded(!isExpanded);
        Animated.timing(animationHeight, {
            toValue: finalValue,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };
    return (
        <View style={styles.section}>
            <TouchableOpacity
                style={styles.header}
                onPress={toggleExpand}
            >
                <View style={styles.headerLeft}>
                    <Text >{categories}</Text>
                </View>
                <View style={styles.headerRight}>
                    {number === 0 ? (
                        <View style={styles.topLabel}>
                            <Text style={styles.topText}>TOP</Text>
                        </View>
                    ) : (
                        <TouchableOpacity
                            style={styles.goTopButton}
                        // onPress={onGoTop}
                        >
                            <Text style={styles.goTopText}>Go Top</Text>
                        </TouchableOpacity>
                    )}
                    {isExpanded ? (
                        <ChevronUp size={20} color="#666" />
                    ) : (
                        <ChevronDown size={20} color="#666" />
                    )}
                </View>
            </TouchableOpacity>

            <Animated.View style={[styles.content, { height: animationHeight }]}>
                <View style={styles.contentInner}>
                    <TextButton text="test"></TextButton>
                    <TouchableOpacity style={styles.addButton}>
                        <Text style={styles.addButtonText}>Add more data</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    appTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 16,
        textAlign: 'center',
    },
    scrollView: {
        flex: 1,
        padding: 16,
    },
    section: {
        marginBottom: 12,
        backgroundColor: '#fff',
        borderRadius: 8,
        overflow: 'hidden',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#e0e0e0',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    number: {
        marginRight: 12,
        fontSize: 16,
        fontWeight: '500',
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
    },
    topLabel: {
        backgroundColor: '#b2ebf2',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 4,
        marginRight: 8,
    },
    topText: {
        color: '#00838f',
        fontSize: 12,
        fontWeight: '600',
    },
    goTopButton: {
        backgroundColor: '#ffcdd2',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
        marginRight: 8,
    },
    goTopText: {
        color: '#c62828',
        fontSize: 14,
        fontWeight: '500',
    },
    content: {
        overflow: 'hidden',
    },
    contentInner: {
        padding: 16,
    },
    contentText: {
        color: '#666',
        marginBottom: 8,
    },
    addButton: {
        backgroundColor: '#e0f7fa',
        padding: 12,
        borderRadius: 4,
        alignItems: 'center',
        marginTop: 8,
    },
    addButtonText: {
        color: '#006064',
        fontSize: 14,
        fontWeight: '500',
    },
});

export default CardComp