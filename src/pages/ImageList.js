import React, {useEffect, useState} from 'react';
import {SectionList, Text, View} from 'react-native';
import {connect} from 'react-redux';

import * as imagesActions from '../actions/imagesActions';

const ImageList = props => {
  useEffect(async () => {
    if (!props.imagesReducer?.images?.length) {
      const authToken = props.authTokenReducer.authToken;
      await props.getImages(authToken);
      console.log('images in props: ', props.imagesReducer?.images);
    }
  }, [props.imagesReducer?.images]);

  return (
    <View>
      {/* TODO DISPLAY IMAGE LIST */}

      {/* {images?.length > 0 && (
        <SectionList
          sections={images}
          keyExtractor={image => image.id}
          renderItem={image => <Text>{image.title}</Text>}
        />
      )} */}

      <Text>This will hold the list of items</Text>
    </View>
  );
};

const mapStateToProps = ({authTokenReducer, imagesReducer}) => {
  return {authTokenReducer, imagesReducer};
};

export default connect(mapStateToProps, imagesActions)(ImageList);
