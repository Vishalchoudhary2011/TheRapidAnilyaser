import React from "react";
import Multiselect from "multiselect-react-dropdown";

export default function Filters() {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
      >
        Filters <i className="bx bx-filter-alt"></i>{" "}
      </button>
      <div className="modal fade stockfilter" id="myModal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">All Technical Filters</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">
              <div className="tv-dialog__scroll-wrap-inner">
                <div className="tv-screener-dialog">
                  <div className="tv-screener-dialog__wrap js-filters-wrap js-2col tv-screener-dialog__wrap--2col">
                    <div className="tv-screener-dialog__filter-field js-filter-field js-filter-field-name tv-screener-dialog__filter-field--cat1 js-wrap tv-screener-dialog__filter-field--active">
                      <div className="tv-screener-dialog__filter-field-title js-filter-field-title-name">
                        Exchange
                      </div>
                      <Multiselect
                        displayValue="key"
                        onKeyPressFn={function noRefCheck() {}}
                        onRemove={function noRefCheck() {}}
                        onSearch={function noRefCheck() {}}
                        onSelect={function noRefCheck() {}}
                        options={[
                          {
                            cat: "Group 1",
                            key: "Any",
                          },
                          {
                            cat: "Group 1",
                            key: "NSE",
                          },
                          {
                            cat: "Group 1",
                            key: "BSE",
                          },
                        ]}
                        singleSelect
                      />
                    </div>
                  </div>
                  <div className="tv-screener-dialog__wrap js-filters-wrap js-2col tv-screener-dialog__wrap--2col secondfun">
                    <div className="tv-screener-dialog__filter-field js-filter-field js-filter-field-name tv-screener-dialog__filter-field--cat1 js-wrap tv-screener-dialog__filter-field--active">
                      <div className="tv-screener-dialog__filter-field-title js-filter-field-title-name">
                        Sectors
                      </div>
                      <Multiselect
                        showArrow
                        customArrow={true}
                        displayValue="key"
                        onKeyPressFn={function noRefCheck() {}}
                        onRemove={function noRefCheck() {}}
                        onSearch={function noRefCheck() {}}
                        onSelect={function noRefCheck() {}}
                        options={[
                          {
                            cat: "Group 1",
                            key: "Finance",
                          },
                          {
                            cat: "Group 1",
                            key: "Government",
                          },
                          {
                            cat: "Group 1",
                            key: "Health Services",
                          },
                          {
                            cat: "Group 1",
                            key: "Health Technology",
                          },
                          {
                            cat: "Group 1",
                            key: "Industrial Services",
                          },
                          {
                            cat: "Group 1",
                            key: "Miscellaneous",
                          },
                          {
                            cat: "Group 1",
                            key: "Non-Energy Minerals",
                          },
                        ]}
                        showCheckbox
                      />
                    </div>
                  </div>
                </div>
                <div className="tv-screener-dialog">
                  <div className="tv-screener-dialog__wrap js-filters-wrap js-2col tv-screener-dialog__wrap--2col secondfun">
                    <div className="tv-screener-dialog__filter-field js-filter-field js-filter-field-name tv-screener-dialog__filter-field--cat1 js-wrap tv-screener-dialog__filter-field--active">
                      <div className="tv-screener-dialog__filter-field-title js-filter-field-title-name">
                        Index
                      </div>
                      <Multiselect
                        displayValue="key"
                        onKeyPressFn={function noRefCheck() {}}
                        onRemove={function noRefCheck() {}}
                        onSearch={function noRefCheck() {}}
                        onSelect={function noRefCheck() {}}
                        options={[
                          {
                            cat: "Group 1",
                            key: "NIFTY 50",
                          },
                          {
                            cat: "Group 1",
                            key: "NIFTY BANK",
                          },
                          {
                            cat: "Group 1",
                            key: "NIFTY",
                          },
                        ]}
                        singleSelect
                      />
                    </div>
                  </div>
                  <div className="tv-screener-dialog__wrap js-filters-wrap js-2col tv-screener-dialog__wrap--2col secondfun">
                    <div className="tv-screener-dialog__filter-field js-filter-field js-filter-field-name tv-screener-dialog__filter-field--cat1 js-wrap tv-screener-dialog__filter-field--active">
                      <div className="tv-screener-dialog__filter-field-title js-filter-field-title-name">
                        Industry
                      </div>
                      <Multiselect
                        showArrow
                        customArrow={true}
                        displayValue="key"
                        onKeyPressFn={function noRefCheck() {}}
                        onRemove={function noRefCheck() {}}
                        onSearch={function noRefCheck() {}}
                        onSelect={function noRefCheck() {}}
                        options={[
                          {
                            cat: "Group 1",
                            key: "Advertising/Marketing Services",
                          },
                          {
                            cat: "Group 1",
                            key: "Aerospace &amp; Defense",
                          },
                          {
                            cat: "Group 1",
                            key: "Agricultural Commodities/Milling",
                          },
                          {
                            cat: "Group 1",
                            key: "Air Freight/Couriers",
                          },
                          {
                            cat: "Group 1",
                            key: "Alternative Power Generation",
                          },
                          {
                            cat: "Group 1",
                            key: "Aluminum",
                          },
                          {
                            cat: "Group 1",
                            key: "Apparel/Footwear",
                          },
                        ]}
                        showCheckbox
                      />
                    </div>
                  </div>
                </div>
                <div className="tv-screener-dialog">
                  <div className="tv-screener-dialog__wrap js-filters-wrap js-2col tv-screener-dialog__wrap--2col">
                    <div className="tv-screener-dialog__filter-field js-filter-field js-filter-field-name tv-screener-dialog__filter-field--cat1 js-wrap tv-screener-dialog__filter-field--active">
                      <div className="tv-screener-dialog__filter-field-title js-filter-field-title-name">
                        New 52 Week High
                      </div>
                      <div className="Checkbox">
                        <input type="checkbox" className="myinput large" />
                      </div>
                    </div>
                  </div>
                  <div className="tv-screener-dialog__wrap js-filters-wrap js-2col tv-screener-dialog__wrap--2col">
                    <div className="tv-screener-dialog__filter-field js-filter-field js-filter-field-name tv-screener-dialog__filter-field--cat1 js-wrap tv-screener-dialog__filter-field--active">
                      <div className="tv-screener-dialog__filter-field-title js-filter-field-title-name">
                        New 52 Week Low
                      </div>
                      <div className="Checkbox">
                        <input type="checkbox" className="myinput large" />
                        <div className="Checkbox-visible"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tv-screener-dialog">
                  <div className="tv-screener-dialog__wrap js-filters-wrap js-2col tv-screener-dialog__wrap--2col">
                    <div className="tv-screener-dialog__filter-field js-filter-field js-filter-field-name tv-screener-dialog__filter-field--cat1 js-wrap tv-screener-dialog__filter-field--active">
                      <div className="tv-screener-dialog__filter-field-title js-filter-field-title-name">
                        New 6-Month High
                      </div>
                      <div className="Checkbox">
                        <input type="checkbox" className="myinput large" />
                      </div>
                    </div>
                  </div>
                  <div className="tv-screener-dialog__wrap js-filters-wrap js-2col tv-screener-dialog__wrap--2col">
                    <div className="tv-screener-dialog__filter-field js-filter-field js-filter-field-name tv-screener-dialog__filter-field--cat1 js-wrap tv-screener-dialog__filter-field--active">
                      <div className="tv-screener-dialog__filter-field-title js-filter-field-title-name">
                        New 6-Month Low
                      </div>
                      <div className="Checkbox">
                        <input type="checkbox" className="myinput large" />
                        <div className="Checkbox-visible"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tv-screener-dialog">
                  <div className="tv-screener-dialog__wrap js-filters-wrap js-2col tv-screener-dialog__wrap--2col">
                    <div className="tv-screener-dialog__filter-field js-filter-field js-filter-field-name tv-screener-dialog__filter-field--cat1 js-wrap tv-screener-dialog__filter-field--active">
                      <div className="tv-screener-dialog__filter-field-title js-filter-field-title-name">
                        New 3-Month High
                      </div>
                      <div className="Checkbox">
                        <input type="checkbox" className="myinput large" />
                      </div>
                    </div>
                  </div>
                  <div className="tv-screener-dialog__wrap js-filters-wrap js-2col tv-screener-dialog__wrap--2col">
                    <div className="tv-screener-dialog__filter-field js-filter-field js-filter-field-name tv-screener-dialog__filter-field--cat1 js-wrap tv-screener-dialog__filter-field--active">
                      <div className="tv-screener-dialog__filter-field-title js-filter-field-title-name">
                        New 3-Month Low
                      </div>
                      <div className="Checkbox">
                        <input type="checkbox" className="myinput large" />
                        <div className="Checkbox-visible"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tv-screener-dialog">
                  <div className="tv-screener-dialog__wrap js-filters-wrap js-2col tv-screener-dialog__wrap--2col">
                    <div className="tv-screener-dialog__filter-field js-filter-field js-filter-field-name tv-screener-dialog__filter-field--cat1 js-wrap tv-screener-dialog__filter-field--active">
                      <div className="tv-screener-dialog__filter-field-title js-filter-field-title-name">
                        New 1-Month High
                      </div>
                      <div className="Checkbox">
                        <input type="checkbox" className="myinput large" />
                      </div>
                    </div>
                  </div>
                  <div className="tv-screener-dialog__wrap js-filters-wrap js-2col tv-screener-dialog__wrap--2col">
                    <div className="tv-screener-dialog__filter-field js-filter-field js-filter-field-name tv-screener-dialog__filter-field--cat1 js-wrap tv-screener-dialog__filter-field--active">
                      <div className="tv-screener-dialog__filter-field-title js-filter-field-title-name">
                        New 1-Month Low
                      </div>
                      <div className="Checkbox">
                        <input type="checkbox" className="myinput large" />
                        <div className="Checkbox-visible"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
