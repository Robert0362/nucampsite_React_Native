import { useSelector } from 'react-redux';
import { FlatList, Text } from 'react-native';
import { Tile } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';


const DirectoryScreen = ({ navigation }) => {
    const campsites = useSelector((state) => state.campsites);
    const renderDirectoryItem = ({ item: campsite }) => {
        return (
            <Tile 
                title = {campsite.name}
                caption={campsite.description}
                featured
                onPress={() => navigation.navigate('CampsiteInfo', {campsite})}
                imageSrc={{ uri: baseUrl + campsite.image }}
            />  
        );
    };
    return (
        <FlatList
            data={campsites.campsitesArray}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default DirectoryScreen;