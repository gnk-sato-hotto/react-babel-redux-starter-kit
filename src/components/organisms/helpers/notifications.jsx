import _ from 'lodash';
import {DESCRIPTION_MAX} from 'constants/limits';
import {FORMAT_ERROR}    from 'constants/errorMessages';
import {containsEmoji}   from 'nkdash';

export const notifications = {
  descriptionDomId: (id) => {
    return `description_${id}`;
  },

  tagDomId: (id) => {
    return `tag_${id}`;
  },

  // お知らせ本文の validation
  descriptionValidator: (description) => {
    const name   = '本文';
    const errors = [];
    if(description.length == 0) {
      return FORMAT_ERROR.requireInput(name).messages;
    }

    if(description.length > DESCRIPTION_MAX) {
      errors.push(_.head(FORMAT_ERROR.overUpperLimit(name, DESCRIPTION_MAX).messages));
    }
    if(containsEmoji(description)) {
      errors.push(_.head(FORMAT_ERROR.invalidEmoji(name).messages));
    }
    return errors;
  },

};
