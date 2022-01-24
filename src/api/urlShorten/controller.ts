import { urlShort } from '../../shared/customTypes';
import { shortenURL } from '../../shared/apiCalls';
import { NextFunction } from 'express';
import CustomError from '../../shared/error';
import database from '../../shared/database';
import { URLS } from '../../shared/utils';

export const getShortURL = async (data: urlShort, next: NextFunction) => {
  try {
    const res: string = await shortenURL(data.longUrl);
    if (res != 'There is some error') {
      await (await database())
        .collection('polls')
        .updateOne({ adminId: data.adminId }, { shortUrl: `${URLS.KZILLA_XYZ_URL}${res}` });
    }
    return res;
  } catch (error) {
    next(new CustomError(error.message, 500));
  }
};
