#create instance
gcloud sql instances create tuto-db --database-version=POSTGRES_12 --storage-size=10 --storage-type=HDD --tier=db-custom-1-1024 --region=us-central1 

#set password
gcloud sql users set-password postgres --instance=tuto-db --password=password

# deploy
gcloud run deploy hello --source . --project rapid-fulcrum-405702 --platform=managed --region us-central1 --allow-unauthenticated --add-cloudsql-instances rapid-fulcrum-405702:us-central1:tuto-db --set-env-vars="DATABASE_URL=postgresql://postgres:password@localhost:5432/postgres?host=/cloudsql/rapid-fulcrum-405702:us-central1:tuto-db"

