import {showFullPhoto} from './show-full-photo.js';
import {uploadPhoto} from './upload-photo.js';
import {miniatures} from './background-content.js';
import { setSubmit } from './api-fetch.js';
import { showMessageOfSuccess, checkSomeFail, closeWindowAfterSubmit } from './api-cheked.js';
import {showFilters} from './get-sort-miniatures.js';
import { doChangeFilter} from './utils/change-filter.js';

showFullPhoto(miniatures());
uploadPhoto();
setSubmit(closeWindowAfterSubmit,  showMessageOfSuccess, checkSomeFail);
showFilters();
doChangeFilter;

