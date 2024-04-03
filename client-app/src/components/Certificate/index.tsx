import React from 'react';

interface Certificate {
    _id: string;
    name: string;
    startDate: string;
    endDate: string;
}

interface CertificateCardProps {
    event: Certificate;
    onDownloadCertificate: (eventId: string) => void;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ event, onDownloadCertificate }) => {
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-200 ease-in-out">
            <h4 className="font-bold text-lg mb-2">{event.name}</h4>
            <p className="text-gray-600">Start: {formatDate(event.startDate)}</p>
            <p className="text-gray-600">End: {formatDate(event.endDate)}</p>
            <button
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={() => onDownloadCertificate(event._id)}
            >
                Download Certificate
            </button>
        </div>
    );
};

export default CertificateCard;
