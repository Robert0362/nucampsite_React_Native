                <Modal
                    animationType='slide'
                    transparent={false}
                    visible={showModal}
                    onRequestClose={() => setShowModal(!showModal)}
                >
                    <View style={styles.modal}>
                        <Text style={styles.modalTitle}>
                            Search Campsite Reservations
                        </Text>
                        <Text style={styles.modalText}>
                            Number of Campers: {campers}
                        </Text>
                        <Text style={styles.modalText}>
                            Hike-In?: {hikeIn ? 'Yes' : 'No'}
                        </Text>
                        <Text style={styles.modalText}>
                            Date: {date.toLocaleDateString('en-US')}
                        </Text>
                        <Button
                            onPress={() => {
                                setShowModal(!showModal);
                                resetForm();
                            }}
                            color='#5637DD'
                            title='Close'
                        />
                    </View>
                </Modal>