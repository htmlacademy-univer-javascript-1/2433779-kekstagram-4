import {createPhotoDescriptionArray} from './data.js';
import {renderThumbnails} from './thumbnails.js';
import {openUserModalElement} from './full-size-image.js';
import {openImageUpload} from './form.js';

const photoArray = createPhotoDescriptionArray();
renderThumbnails(photoArray);
openUserModalElement(photoArray);
openImageUpload();
