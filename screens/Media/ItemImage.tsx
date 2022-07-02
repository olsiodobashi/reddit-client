import React from 'react';
import { Text, Image } from 'react-native';

const ItemImage = ({ preview }: { preview: { images: any[] } }) => {
  return <Image source={{ uri: preview.images[0].source.url }} style={{ width: 100, height: 100 }} resizeMethod="auto" />;
};

export default ItemImage;
