import _ from 'lodash';
import {
  LEADER_NUM_MIN,
  LEADER_NUM_MAX,
  CLIENT_NAME_MAX,
  ACCOUNT_MAX_NUM_MAX,
  ACCOUNT_MAX_NUM_MIN,
  HASHTAG_MAX_NUM_MAX,
  HASHTAG_MAX_NUM_MIN,
  OBSERVED_ACCOUNT_MAX_NUM_MAX,
  OBSERVED_ACCOUNT_MAX_NUM_MIN,
} from 'constants/limits';
import {FORMAT_ERROR} from 'constants/errorMessages';
import {
  isNumber,
  currentUrl,
  containsEmoji,
  containsSpecialChar,
} from 'nkdash';

export const createClient = {

  // クライアント名の Validation
  nameValidator: (clientName) => {
    const name   = 'クライアント名';
    const errors = [];
    // rules
    // 1. 1 文字以上 n 文字以下
    // 2. 絵文字なし
    // 3. 特殊記号なし
    if(clientName.length == 0) {
      return FORMAT_ERROR.requireInput(name).messages;
    }

    if(clientName.length > CLIENT_NAME_MAX) {
      errors.push(_.head(FORMAT_ERROR.overUpperLimit(name, CLIENT_NAME_MAX).messages));
    }
    if(containsEmoji(clientName)) {
      errors.push(_.head(FORMAT_ERROR.invalidEmoji(name).messages));
    }
    if(containsSpecialChar(clientName)) {
      errors.push(_.head(FORMAT_ERROR.invalidSpecialChar(name).messages));
    }

    return errors;
  },

  // 自社アカウント最大登録数
  accountMaxNumValidator(n) {
    const name   = '自社アカウント最大登録数';

    if(n.length === 0) {
      return FORMAT_ERROR.requireInput(name).messages
    }
    if(!isNumber(n)) {
      return FORMAT_ERROR.requireHalfWidthDigit(name).messages
    }

    n = _.parseInt(n);
    if(n < ACCOUNT_MAX_NUM_MIN || n > ACCOUNT_MAX_NUM_MAX) {
      return FORMAT_ERROR.outOfRange(
        name,
        ACCOUNT_MAX_NUM_MIN,
        ACCOUNT_MAX_NUM_MAX
      ).messages;
    }

    return [];
  },

  observedAccountMaxNumValidator(n) {
    const name   = '分析対象アカウント最大登録数';

    if(n.length === 0) {
      return FORMAT_ERROR.requireInput(name).messages;
    }
    if(!isNumber(n)) {
      return FORMAT_ERROR.requireHalfWidthDigit(name).messages
    }

    n = _.parseInt(n);
    if(n < OBSERVED_ACCOUNT_MAX_NUM_MIN || n > OBSERVED_ACCOUNT_MAX_NUM_MAX) {
      return FORMAT_ERROR.outOfRange(
        name,
        OBSERVED_ACCOUNT_MAX_NUM_MIN,
        OBSERVED_ACCOUNT_MAX_NUM_MAX
      ).messages;
    }
    return [];
  },

  hashtagMaxNumValidator(n) {
    const name   = '分析対象ハッシュタグ最大登録数';

    if(n.length === 0) {
      return FORMAT_ERROR.requireInput(name).messages;
    }
    if(!isNumber(n)) {
      return FORMAT_ERROR.requireHalfWidthDigit(name).messages
    }

    n = _.parseInt(n);
    if(n < HASHTAG_MAX_NUM_MIN || n > HASHTAG_MAX_NUM_MAX) {
      return FORMAT_ERROR.outOfRange(
        name,
        HASHTAG_MAX_NUM_MIN,
        HASHTAG_MAX_NUM_MAX
      ).messages;
    }
    return [];
  },

  leaderMaxNumValidator(n) {
    const name   = '登録可能リーダー数';

    if(n.length === 0) {
      return FORMAT_ERROR.requireInput(name).messages;
    }
    if(!isNumber(n)) {
      return FORMAT_ERROR.requireHalfWidthDigit(name).messages
    }

    n = _.parseInt(n);
    if(n < LEADER_NUM_MIN || n > LEADER_NUM_MAX) {
      return FORMAT_ERROR.outOfRange(
        name,
        LEADER_NUM_MIN,
        LEADER_NUM_MAX
      ).messages;
    }
    return [];
  },
};
