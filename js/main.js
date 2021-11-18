import {showFullPhoto} from './show-full-photo.js';
import {uploadPhoto} from './upload-photo.js';
import {frameMiniatures} from './background-content.js';
import { setSubmit } from './api-fetch.js';
import { showMessageOfSuccess, checkSomeFail, closeWindowAfterSubmit } from './api-cheked.js';
import {showFilters} from './get-sort-miniatures.js';
import {changeFilter} from './utils/change-filter.js';
import {uploadPicture} from './upload-picture.js';

showFullPhoto(frameMiniatures());
uploadPhoto();
setSubmit(closeWindowAfterSubmit,  showMessageOfSuccess, checkSomeFail);
showFilters();
uploadPicture();
changeFilter();
