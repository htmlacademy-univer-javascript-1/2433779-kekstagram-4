import {renderThumbnails} from './thumbnails.js';
import {openUserModalElement} from './full-size-image.js';
import {openImageUpload} from './form.js';
import {getData} from './api.js';
import {showAlert} from './util.js';

getData()
  .then((photoArray) => {
    renderThumbnails(photoArray);
    openUserModalElement(photoArray);
  })
  .catch((err) => showAlert(err.message));

openImageUpload();
