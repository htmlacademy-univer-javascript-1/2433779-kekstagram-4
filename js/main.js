import {renderThumbnails} from './thumbnails.js';
import {openUserModalElement} from './full-size-image.js';
import {openImageUpload} from './form.js';
import {getData} from './api.js';
import {showAlert} from './util.js';
import {clickDefaultFilter, clickRandomFilter, clickDiscussedFilter} from './filters.js';
import {debounce} from './util.js';

getData()
  .then((photoArray) => {
    renderThumbnails(photoArray);
    openUserModalElement(photoArray);
    clickDefaultFilter(debounce(
      () => renderThumbnails(photoArray)
    ));
    clickRandomFilter(debounce(
      () => renderThumbnails(photoArray, 'random')
    ));
    clickDiscussedFilter(debounce(
      () => renderThumbnails(photoArray, 'discussed')
    ));
  })
  .catch((err) => showAlert(err.message));

openImageUpload();
