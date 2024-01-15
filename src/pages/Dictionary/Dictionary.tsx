import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '~/components/Button';

import styles from './Dictionary.module.scss';

export const Dictionary = () => {
  const { t } = useTranslation();
  const [file, setFile] = useState<File | null>(null);

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;

    if (target.files) {
      setFile(target.files[0]);
    }
  };

  const selectedFileName = file ? `${file.name}.${file.type}` : t('dictionary_no_file_label');

  return (
    <div className={styles.wrapper}>
      <h6 className={styles.page_title}>{t('page_dictionary')}</h6>

      <section className={styles.upload_section_wrapper}>
        <span className={styles.section_title}>{t('dictionary_upload_file_section_title')}</span>

        <div className={styles.upload_file_wrapper}>
          <div className={styles.upload_file_input_wrapper}>
            <div className={styles.upload_file_input}>
              <label className={styles.input_label} htmlFor="file_input">
                {t('dictionary_upload_file_label')}
              </label>
              <input id="file_input" onChange={onFileChange} type="file" />
            </div>
            <span className={styles.file_name}>{selectedFileName}</span>
          </div>

          <Button>{t('dictionary_read_file_button')}</Button>
        </div>
      </section>
    </div>
  );
};
