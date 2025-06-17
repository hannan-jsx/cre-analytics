import { Get } from '@/Axios/AxiosFunctions';
import RenderField from '@/components/RenderField';
import { BaseURL } from '@/config/apiUrl';
import { formatNumber } from '@/Helper/HelperFunction';
import { Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import classes from './Report.module.css';

const Report = ({ id }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { access_token } = useSelector((state) => state?.authReducer);
  const getData = async () => {
    setLoading(true);
    const apiUrl = BaseURL(`analytics/report/${id}`);
    const response = await Get(apiUrl, access_token);
    if (response !== undefined) {
      setData(response?.data?.data);
    }
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={classes.mortgage__wrapper}>
      {loading ? (
        <div className={classes.payment__wrapper}>
          <Skeleton
            variant='rounded'
            width={'30%'}
            height={30}
            sx={{ mb: 2, mt: 2 }}
          />

          <div className={classes.renderFields}>
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <Skeleton variant='rounded' width={'100%'} height={55} />
              ))}
          </div>
        </div>
      ) : (
        <div className={classes.payment__wrapper}>
          <h3 className={classes.payment__heading}> Report Details</h3>
          <div className={classes.renderFields}>
            <div className={classes.fullWidth}>
              <RenderField
                label={'Location'}
                value={data?.location ? data?.location : 'N/A'}
              />
            </div>
            <RenderField
              label={'Property Name'}
              value={data?.property ? data?.property : 'N/A'}
            />

            <RenderField
              label={'Asking Price'}
              value={
                data?.askingPrice
                  ? '$' + formatNumber(data?.askingPrice)
                  : 'N/A'
              }
            />
            <RenderField
              label={'Interest Rate (%)'}
              value={
                data?.interestRate
                  ? formatNumber(data?.interestRate) + '%'
                  : 'N/A'
              }
            />
            <RenderField
              label={'Investor Funding'}
              value={
                data?.investorFunding
                  ? '$' + formatNumber(data?.investorFunding)
                  : 'N/A'
              }
            />
            <RenderField
              label={'LP Waterfall Share (%)'}
              value={
                data?.lpWaterFallShare
                  ? formatNumber(data?.lpWaterFallShare) + '%'
                  : 'N/A'
              }
            />

            <RenderField
              label={'Months Interest Only (%)'}
              value={
                data?.monthsInterestOnly
                  ? formatNumber(data?.monthsInterestOnly) + '%'
                  : 'N/A'
              }
            />
            <RenderField
              label={'Mortgage LTV (%)'}
              value={
                data?.mortgageLtv
                  ? formatNumber(data?.mortgageLtv) + '%'
                  : 'N/A'
              }
            />
            <RenderField
              label={'Offer Percent (%)'}
              value={
                data?.offerPercent
                  ? formatNumber(data?.offerPercent) + '%'
                  : 'N/A'
              }
            />
            <RenderField
              label={'Offer Price'}
              value={
                data?.offerPrice ? '$' + formatNumber(data?.offerPrice) : 'N/A'
              }
            />
            <RenderField
              label={'Terms In Years'}
              value={
                data?.termsInYears ? formatNumber(data?.termsInYears) : 'N/A'
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Report;
