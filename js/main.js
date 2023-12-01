import {createPhotoDescriptionArray} from './data.js';
import {renderThumbnails} from './thumbnails.js';
import {openUserModalElement} from './fullSizeImage.js';

const photoArray = createPhotoDescriptionArray();
renderThumbnails(photoArray);
openUserModalElement(photoArray);
