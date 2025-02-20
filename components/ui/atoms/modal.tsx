import { Modal, Pressable, Text } from "react-native";

function ModalComp() {
    // <Modal
    //   animationType="slide"
    //   transparent={true}
    //   visible={visible}
    //   onRequestClose={onClose}
    // >
    //   <KeyboardAvoidingView
    //     behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //     style={styles.modalContainer}
    //   >
    //     <View style={styles.modalContent}>
    //       <View style={styles.modalHeader}>
    //         <Text style={styles.modalTitle}>Add New Data</Text>
    //         <TouchableOpacity onPress={onClose} style={styles.closeButton}>
    //           <X size={24} color="#666" />
    //         </TouchableOpacity>
    //       </View>

    //       <TextInput
    //         style={styles.input}
    //         value={text}
    //         onChangeText={setText}
    //         placeholder="Enter your data"
    //         multiline
    //       />
    //       <View style={styles.modalButtons}>
    //         <TouchableOpacity 
    //           style={[styles.modalButton, styles.cancelButton]} 
    //           onPress={onClose}
    //         >
    //           <Text style={styles.cancelButtonText}>Cancel</Text>
    //         </TouchableOpacity>
    //         <TouchableOpacity 
    //           style={[styles.modalButton, styles.submitButton]} 
    //           onPress={handleSubmit}
    //         >
    //           <Text style={styles.submitButtonText}>Submit</Text>
    //         </TouchableOpacity>
    //       </View>
    //     </View>
    //   </KeyboardAvoidingView>
    // </Modal>
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={true}
        // onRequestClose={onClose}
        >
            <Pressable>
                <Text>
                    OK
                </Text>
            </Pressable>
        </Modal>
    )
}

export default ModalComp