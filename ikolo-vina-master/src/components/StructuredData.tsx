// src/components/StructuredData.tsx (MODIFIÉ)
interface StructuredDataProps {
  data: Record<string, unknown>;
}

const StructuredData = ({ data }: StructuredDataProps) => {
  return (
    <script type="application/ld+json">
      {JSON.stringify(data)}
    </script>
  );
};

export default StructuredData;