import React, {useState} from 'react';
import Button from '../../../components/button/button';
import Text from '../../../components/text/text';
import ImagePicker from 'react-native-image-picker';
import Camera from '../../../assets/images/camera.png';

import {
  Container,
  Link,
  CameraImage,
  SelectedImage,
  ImageSelection,
  EmptyInfo,
} from './styles';

const CreateProductImage = ({nextStep}) => {
  const [image, setImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const showPicker = () => {
    const options = {
      title: 'Seleccionar imagen',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    if (!isLoading) {
      ImagePicker.showImagePicker(options, response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          alert(response.error);
        } else {
          const source = {uri: response.uri};
          setImage(source);
          setIsLoading(true);
        }
      });
    }
  };

  return (
    <Container>
      <ImageSelection>
        {image !== '' ? (
          <SelectedImage source={image} />
        ) : (
          <EmptyInfo>
            <CameraImage source={Camera} />
            <Text type="headline 3">Que todos vean qué vendes</Text>
            <Text color="gray" align="center">
              Para no perder exposición, asegúrate de que este centrado y que no
              tenga bordes ni marcas de agua
            </Text>
          </EmptyInfo>
        )}
      </ImageSelection>

      {image === '' ? (
        <>
          <Button value="Agregar fotos ahora" onPress={() => showPicker()} />
          <Link onPress={() => nextStep()}>
            <Text type="small" color="primary">
              Mas tarde
            </Text>
          </Link>
        </>
      ) : (
        <>
          <Button value="Continuar" onPress={() => nextStep()} />
        </>
      )}
    </Container>
  );
};

export default CreateProductImage;
