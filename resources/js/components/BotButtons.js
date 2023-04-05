import AllActsModal from './modals/AllActsModal';
import { useState } from 'react';

function BotButtons({ onMarkAll, onDeleteAll }) {
    const [showUpdate, setShowUpdate] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    return (
        <div className="row">
            <div className="col-6">
                <button type="button" className="mt-2 py-2 btn button btn-border-secondary-custom w-100"  onClick={() => setShowUpdate(true)}>
                    <h4 className='m-0'>Complete All</h4>
                </button>
                <AllActsModal onMarkAll={onMarkAll} show={showUpdate} job='complete' onHide={() => setShowUpdate(false)}/>
            </div>
            <div className="col-6">
                <button type="button" className="mt-2 py-2 btn button btn-border-secondary-custom w-100"  onClick={() => setShowDelete(true)}>
                    <h4 className='m-0'>Delete All</h4>
                </button>
                <AllActsModal onDeleteAll={onDeleteAll} show={showDelete}  job='delete' onHide={() => setShowDelete(false)}/>
            </div>
        </div>
    );
};

export default BotButtons;
