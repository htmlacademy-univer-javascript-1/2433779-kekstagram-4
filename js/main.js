import {createPhotoDescriptionArray} from './data.js';
import {renderThumbnails} from './thumbnails.js';
import {openUserModalElement} from './fullSizeImage.js';
import {openImageUpload} from './form.js';

const photoArray = createPhotoDescriptionArray();
renderThumbnails(photoArray);
openUserModalElement(photoArray);
openImageUpload();
