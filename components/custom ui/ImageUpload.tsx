import { CldUploadWidget } from 'next-cloudinary';
import { Button } from '../ui/button';
import { Plus, Trash } from 'lucide-react';
import Image from 'next/image';

interface ImageUploadProps {
  value: string[];
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({value, onChange, onRemove}) => {

  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  }

  return (
    <div>
      <div className='flex flex-wrap items-center gap-4 mb-4'>
        {value.map((url)=>(
          <div className='relative w-[200px] h-[200px]'>
            <div className='absolute top-0 right-0 z-10'>
              <Button className='bg-red-1 text-white' size={'sm'} onClick={()=>onRemove(url)}>
                <Trash className='h-4 w-4'/>
              </Button>
            </div>
            <Image src={url} alt='collection' className='object-cover rounded-lg' fill/>
          </div>
        ))}
      </div>
      <CldUploadWidget uploadPreset='lricsjqr' onSuccess={onUpload}> 
        {({ open }) => {
          return (
            <Button onClick={() => open()} className='bg-grey-1 text-white'>
              <Plus  className='h-4 w-4 mr-2'/>Upload
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  )
}

export default ImageUpload

// O nome do 'uploadpreset' está em "https://console.cloudinary.com/settings/c-6d169cab3e9c5f3bd42883e1a8eb55/upload_presets/new"