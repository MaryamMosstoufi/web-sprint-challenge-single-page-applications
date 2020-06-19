import React from 'react';

export default function Form() {
    return (
        <div>
            <form>
                <fieldset className='uk-fieldset'>
                    <legend className='uk-legend uk-margin-bottom'>Build Your Own Pizza</legend>
                    <div className='uk-text-bold uk-text-center uk-margin-small-bottom'>Size</div>
                    <div className='uk-flex-center uk-grid'>
                        <div className='uk-width-1-4@s'>
                            <select className='uk-select'>
                                <option>Small</option>
                                <option>Medium</option>
                                <option>Large</option>
                            </select>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='uk-text-bold uk-text-center uk-margin-small-bottom'>Sauces</div>
                    <div className='uk-card uk-card-default uk-card-body uk-padding-small'>
                        <div className='uk-child-width-1-3@s uk-text-center uk-grid '>
                            <div>
                                <div className='uk-card uk-card-body uk-padding-small'>
                                    <label><input className='uk-checkbox' type='checkbox' name='' /> Pesto</label>
                                </div>
                            </div>
                            <div>
                                <div className='uk-card uk-card-body uk-padding-small'>
                                    <label><input className='uk-checkbox' type='checkbox' name='' /> Red Sauce</label>
                                </div>
                            </div>
                            <div>
                                <div className='uk-card uk-card-body uk-padding-small'>
                                    <label><input className='uk-checkbox' type='checkbox' name='' /> White Sauce</label>
                                </div>
                            </div>
                            <div>
                                <div className='uk-card uk-card-body uk-padding-small'>
                                    <label><input className='uk-checkbox' type='checkbox' name='' /> Garlic Rub</label>
                                </div>
                            </div>
                            <div>
                                <div className='uk-card uk-card-body uk-padding-small'>
                                    <label><input className='uk-checkbox' type='checkbox' name='' /> Spicy Chilli Sauce</label>
                                </div>
                            </div>
                            <div>
                                <div className='uk-card uk-card-body uk-padding-small'>
                                    <label><input className='uk-checkbox' type='checkbox' name='' /> BBQ Sauce</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='uk-text-bold uk-text-center uk-margin-small-bottom'>Cheese</div>
                    <div className='uk-card uk-card-default uk-card-body uk-padding-small'>
                        <div className='uk-child-width-1-3@s uk-text-center uk-grid '>
                            <div>
                                <div className='uk-card uk-card-body uk-padding-small'>
                                    <label><input className='uk-checkbox' type='checkbox' name='' /> Asiago</label>
                                </div>
                            </div>
                            <div>
                                <div className='uk-card uk-card-body uk-padding-small'>
                                    <label><input className='uk-checkbox' type='checkbox' name='' /> Feta</label>
                                </div>
                            </div>
                            <div>
                                <div className='uk-card uk-card-body uk-padding-small'>
                                    <label><input className='uk-checkbox' type='checkbox' name='' /> Gorgonzola</label>
                                </div>
                            </div>
                            <div>
                                <div className='uk-card uk-card-body uk-padding-small'>
                                    <label><input className='uk-checkbox' type='checkbox' name='' /> Mozzarella</label>
                                </div>
                            </div>
                            <div>
                                <div className='uk-card uk-card-body uk-padding-small'>
                                    <label><input className='uk-checkbox' type='checkbox' name='' /> Parmesan</label>
                                </div>
                            </div>
                            <div>
                                <div className='uk-card uk-card-body uk-padding-small'>
                                    <label><input className='uk-checkbox' type='checkbox' name='' /> Ricotta</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='uk-text-bold uk-text-center uk-margin-small-bottom'>Special Instructions</div>
                    <div className='uk-card uk-card-default uk-card-body uk-padding-small'>
                        <div>
                            <div className='uk-card uk-card-body uk-padding-small'>
                                <textarea class="uk-textarea" rows="3" placeholder="..."></textarea>
                            </div>
                        </div>
                    </div>
                    <div className='uk-margin-top uk-text-center'>
                        <button className='uk-button uk-button-default'>Add to Order</button>
                    </div>

                </fieldset>
            </form>
        </div>
    )
}