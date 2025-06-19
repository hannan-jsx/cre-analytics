import { Get } from '@/Axios/AxiosFunctions';
import { Button } from '@/components/Core/Button';
import RenderField from '@/components/RenderField';
import { BaseURL } from '@/config/apiUrl';
import { formatNumber } from '@/Helper/HelperFunction';
import { Skeleton } from '@mui/material';
import * as html2canvas from 'html2canvas'; // ✅ always safe
import jsPDF from 'jspdf';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import classes from './Report.module.css';
import TableStructure from '@/components/Core/TableStructure';

const Report = ({ id }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { access_token } = useSelector((state) => state?.authReducer);
  const contentRef = useRef(null);

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

  const downloadPdf = async () => {
    const input = contentRef.current;
    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgProps = pdf.getImageProperties(imgData);
    const imgWidth = pdfWidth;
    const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pdfHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;
    }

    pdf.save('Investment-Summary.pdf');
  };

  return (
    <div>
      <div className={classes.download__btn}>
        <Button
          label={'Download Report'}
          onClick={downloadPdf}
          disabled={loading || !data}
        />
      </div>

      <div className={classes.mortgage__wrapper} ref={contentRef}>
        {loading ? (
          <div className={classes.payment__wrapper}>
            <Skeleton
              variant='rounded'
              width={'30%'}
              height={30}
              sx={{ mb: 2, mt: 2 }}
            />
            <Skeleton
              variant='rounded'
              width={'100%'}
              height={55}
              sx={{ mb: 2 }}
            />
            <div className={classes.renderFields}>
              {Array(14)
                .fill(0)
                .map((_, index) => (
                  <Skeleton
                    key={index}
                    variant='rounded'
                    width={'100%'}
                    height={55}
                  />
                ))}
            </div>
          </div>
        ) : (
          <div className={classes.payment__wrapper}>
            <h3 className={classes.payment__heading}>Report Details</h3>
            <div className={classes.renderFields}>
              <div className={classes.fullWidth}>
                <RenderField
                  label={'Location'}
                  value={data?.location || 'N/A'}
                />
              </div>
              <RenderField
                label={'Property Name'}
                value={data?.property || 'N/A'}
              />
              <RenderField
                label={'Asking Price'}
                value={
                  data?.askingPrice
                    ? '$' + formatNumber(data.askingPrice)
                    : 'N/A'
                }
              />
              <RenderField
                label={'Interest Rate (%)'}
                value={
                  data?.interestRate
                    ? formatNumber(data.interestRate) + '%'
                    : 'N/A'
                }
              />
              <RenderField
                label={'Investor Funding'}
                value={
                  data?.investorFunding
                    ? '$' + formatNumber(data.investorFunding)
                    : 'N/A'
                }
              />
              <RenderField
                label={'LP Waterfall Share (%)'}
                value={
                  data?.lpWaterFallShare
                    ? formatNumber(data.lpWaterFallShare) + '%'
                    : 'N/A'
                }
              />
              <RenderField
                label={'Months Interest Only (%)'}
                value={
                  data?.monthsInterestOnly
                    ? formatNumber(data.monthsInterestOnly) + '%'
                    : 'N/A'
                }
              />
              <RenderField
                label={'Mortgage LTV (%)'}
                value={
                  data?.mortgageLtv
                    ? formatNumber(data.mortgageLtv) + '%'
                    : 'N/A'
                }
              />
              <RenderField
                label={'Offer Percent (%)'}
                value={
                  data?.offerPercent
                    ? formatNumber(data.offerPercent) + '%'
                    : 'N/A'
                }
              />
              <RenderField
                label={'Offer Price'}
                value={
                  data?.offerPrice ? '$' + formatNumber(data.offerPrice) : 'N/A'
                }
              />
              <RenderField
                label={'Terms In Years'}
                value={
                  data?.termsInYears ? formatNumber(data.termsInYears) : 'N/A'
                }
              />
            </div>

            {/* Investment Insights */}
            {data?.investmentInsights && (
              <div style={{ marginTop: '2rem' }}>
                <h3 className={classes.payment__heading}>
                  Investment Insights
                </h3>

                <div className={classes.renderFields}>
                  <RenderField
                    label={'Best Annualized Return (%) (No Refinance Year 5)'}
                    value={
                      data?.investmentInsights?.bestAnnualizedReturn?.value
                        ? formatNumber(
                            data?.investmentInsights?.bestAnnualizedReturn
                              ?.value
                          ) + '%'
                        : 'N/A'
                    }
                  />
                  <RenderField
                    label={
                      'Best Cash on Cash (%) (Refinance Year 10 month 61) '
                    }
                    value={
                      data?.investmentInsights?.bestCashOnCash?.value
                        ? formatNumber(
                            data?.investmentInsights?.bestCashOnCash?.value
                          ) + '%'
                        : 'N/A'
                    }
                  />
                  <RenderField
                    label={'Best Irr (%) (Refinance Year 10) '}
                    value={
                      data?.investmentInsights?.bestIrr?.value
                        ? formatNumber(
                            data?.investmentInsights?.bestIrr?.value
                          ) + '%'
                        : 'N/A'
                    }
                  />
                  <RenderField
                    label={
                      'Worst Annualized Return (Refinance Year 10 month 37) '
                    }
                    value={
                      data?.investmentInsights?.worstAnnualizedReturn?.value
                        ? '$' +
                          formatNumber(
                            data?.investmentInsights?.worstAnnualizedReturn
                              ?.value
                          )
                        : 'N/A'
                    }
                  />
                  <RenderField
                    label={'Worst Cash on Cash (%) (Refinance Year 5) '}
                    value={
                      data?.investmentInsights?.worstCashOnCash?.value
                        ? formatNumber(
                            data?.investmentInsights?.worstCashOnCash?.value
                          ) + '%'
                        : 'N/A'
                    }
                  />
                  <RenderField
                    label={'Worst Irr (%) (Refinance Year 5 month 37) '}
                    value={
                      data?.investmentInsights?.worstIrr?.value
                        ? formatNumber(
                            data?.investmentInsights?.worstIrr?.value
                          ) + '%'
                        : 'N/A'
                    }
                  />
                </div>
              </div>
            )}

            {/* Property Manager Fee List */}
            {data?.syndicatorsDealData?.propertyManagerValues?.length > 0 && (
              <div style={{ marginTop: '2rem' }}>
                <h3 className={classes.payment__heading}>
                  Property Manager Fees
                </h3>
                <div className={classes.renderFields}>
                  {data.syndicatorsDealData.propertyManagerValues.map(
                    (item, index) => (
                      <RenderField
                        label={`Year ${item.year}`}
                        value={
                          item?.propertyManagerFee
                            ? `$${formatNumber(item.propertyManagerFee)}`
                            : 'N/A'
                        }
                      />
                    )
                  )}
                  {/* </div> */}
                </div>
              </div>
            )}

            <TableStructure
              headerTitle={'Syndicator Deal Values'}
              tableHeaders={syndicatorsDealValuesTable}
              tableContent={data?.syndicatorsDealData?.syndicatorsDealValues?.map(
                (item) => ({
                  year: (
                    <p className={classes.month}>
                      {item?.year} <sup>th</sup>
                    </p>
                  ),
                  annualizedTotalValue: item?.annualizedTotalValue
                    ? `$${formatNumber(item.annualizedTotalValue)}`
                    : 'N/A',
                  syndicatorAcquisation: item?.syndicatorAcquisation
                    ? `$${formatNumber(item.syndicatorAcquisation)}`
                    : 'N/A',
                  syndicationExit: item?.syndicationExit
                    ? `$${formatNumber(item.syndicationExit)}`
                    : 'N/A',
                  syndicatorAumFee: item?.syndicatorAumFee
                    ? `$${formatNumber(item.syndicatorAumFee)}`
                    : 'N/A',
                  gainShare: item?.gainShare
                    ? `$${formatNumber(item.gainShare)}`
                    : 'N/A',
                  totalValue: item?.totalValue
                    ? `$${formatNumber(item.totalValue)}`
                    : 'N/A',
                })
              )}
              customStyle={{ height: '200px' }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Report;
const syndicatorsDealValuesTable = [
  {
    label: ' Year',
    value: 'year',
  },
  {
    label: ' Anualized Total Value',
    value: 'annualizedTotalValue',
  },
  {
    label: ' Syndicator Acquisation',
    value: 'syndicatorAcquisation',
  },
  {
    label: ' Syndication Exit',
    value: 'syndicationExit',
  },
  {
    label: ' AUM Fee',
    value: 'syndicatorAumFee',
  },
  {
    label: ' Gain Share',
    value: 'gainShare',
  },
  {
    label: '  Total Value ',
    value: 'totalValue',
  },
];
